# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'http://rubygems.org'

gem "builder", ">=3.0"
gem "compass", "~> 1.0"

gem "middleman", "~> 4"
gem "middleman-sprockets"
gem "middleman-autoprefixer"
gem "middleman-compass"
gem "opal"

gem "kramdown"
gem 'wdm', '>= 0.1.0' if RbConfig::CONFIG['target_os'] =~ /mswin|mingw/i
gem "oj" if not RbConfig::CONFIG['target_os'] =~ /mswin|mingw/i
gem "therubyracer", "=0.12.1" if not RbConfig::CONFIG['target_os'] =~ /mswin|mingw/i

source 'https://rails-assets.org' do
    gem "rails-assets-headjs", "~>1.0.3"
    gem "rails-assets-html5shiv", "~>3.7.2"
    gem "rails-assets-nvd3", "~>1.1.15.beta"
    gem "rails-assets-remark", ">=0.13.0"
    gem "rails-assets-zepto", "~>1.1.4"
    gem "rails-assets-bourbon", ">=4.2.7"
    gem "rails-assets-neat", "2.0.0"
	gem "rails-assets-icomoon"
	gem "rails-assets-open-sans"
end