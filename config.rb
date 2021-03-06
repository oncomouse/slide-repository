#####
# Things you should edit.
#####
set :build_http_prefix, "/slides"
set :build_dir, "build"
set :use_mm_deploy, false
#set :mm_deploy_method, :rsync
#set :mm_deploy_host, "username@remote-server.com"
#set :mm_deploy_path, "~/username/www/slides"

#####
# Don't edit below this line.
###################################################

###
# Compass
###

set :markdown_engine, :kramdown
set :markdown, :fenced_code_blocks => true,
							 :autolink => true,
							 :smartypants => true,
							 :footnotes => true,
							 :superscript => true

set :haml, { :format => :html5 }
Haml::TempleEngine.disable_option_validator!

###
# Page options, layouts, aliases and proxies
###

configure :build do
	set :http_prefix, config[:build_http_prefix]
end

page "*.html", :layout => "remark"

###
# Helpers
###

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

class String
	def naturalized
		scan(/[^\d\.]+|[\d\.]+/).collect { |f| f.match(/\d+(\.\d+)?/) ? f.to_f : f }
	end
end

helpers do
	def javascript_path(file_path)
		asset_path(:js, file_path)
	end
    def image_path(file_path)
        asset_path(:images, file_path)
    end

	def directories_with_slides
		sitemap.resources.map{ |resource| if (!(resource.destination_path =~ /(javascripts|stylesheets|images|fonts)\//) and resource.destination_path =~ /\//) then resource.destination_path.gsub(/\/.*\.[A-Za-z]+$/,"") end }.delete_if {|x| x.nil? }.uniq
	end

end

ready do
    ignore "remark_markdown_template.html"
end

activate :sprockets
if defined? RailsAssets
  RailsAssets.load_paths.each do |path|
    sprockets.append_path path
	compass_config do |config|
		config.add_import_path path
	end
  end
end

# We have to parse through the source directory for two things:
#  - Markdown slide files
#  - Directories
#
# We have to proxy both kinds of files for specific reasons related
# to building the repository.
#
parse_files = Dir.entries(File.join(root, "source"))
while parse_files.length > 0
    file = parse_files.shift
    next if file =~ /^\./
    next if file =~ /remark_base/

	# If the file is a Markdown slide source, we proxy it to remark_markdown_template.html.haml
	# This file will actually set up all the JavaScript and page layout things for
	# the Markdown file, while loading the source as a Textarea, as Remark.js likes.
    if file =~ /(\.markdown|\.md)$/
        markdown_source = File.open("#{Dir.pwd}/source/#{file}").read
        proxy "#{file.sub(File.extname(file), "")}", "remark_markdown_template.html", :locals => {:markdown_source => file}
    end

	# If the file is a directory, we proxy a directory index to /index.html.erb,
	# which will build the index display for the various slide files we are generating.
	if File.directory? "#{Dir.pwd}/source/#{file}" and !(file =~ /(javascripts|stylesheets|images|fonts|layouts)/) and !(file =~ /^\./)
        proxy "#{file}/index.html", "index.html", :locals => {:directory => file}

        parse_files += Dir.entries("#{Dir.pwd}/source/#{file}").map! { |x| if x =~ /^\./ then nil else "#{file}/#{x}" end }
        parse_files.compact!.uniq!
	end
end

if config[:use_mm_deploy]
	activate :deploy do |deploy|
		deploy.deploy_method = config[:mm_deploy_method]
		deploy.host = config[:mm_deploy_host]
		deploy.path = config[:mm_deploy_path]
	end
end