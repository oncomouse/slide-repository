---
title: Example Markdown Slides
twitter: true
twitter_name: oncomouse
twitter_name_start: 1
progress_bar: true
---

class: center, middle, inverse

# Title

---
class: animated slideInLeft
.left-column[
  ## .current[Item 1]
  ## Item 2
]

---
class: 
.left-column[
  ## Item 1
  ## .current[Item 2]
]

.right-column[
```javascript
function update_progress() {
	var regex = /([0-9]+) \/ ([0-9]+)/;
	var fraction = regex.exec($(".remark-position").html());
	var current_slide = fraction[1];
	var total_slides = fraction[2];
	if (total_slides == 1) {
		$("#remark-progress").width(0);
		return;
	}
	$("#remark-progress").width((current_slide - 1);
}
```
]