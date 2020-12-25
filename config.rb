set :source, 'src'
activate :directory_indexes

# Exceptions
page '/404.html', :layout => false
page "/404.html", :directory_index => false

# Set project page proxies
data.projects.each do |name, project|
	proxy "/projects/#{name}/index.html", "/project_detail.html",
	:locals => {
		:project_name => name,
		:project => project
	},
	:ignore => true
end

# Build optimization
configure :build do
	activate :minify_css
	activate :minify_javascript
end

# Custom functions
helpers do
	def tab_highlight(tab_name)
		if current_page.data.tab == tab_name
			return "highlighted"
		else
			return ""
		end
	end
end
  