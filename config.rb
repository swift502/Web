set :source, 'src'
activate :directory_indexes

data.projects.each do |name, project|
	proxy "/projects/#{name}/index.html", "/projects/template.html", :locals => { :project => project }, :ignore => true
end

configure :build do
    activate :minify_css
    activate :minify_javascript
end

helpers do
	def tab_highlight(tab_name)
		if current_page.data.tab == tab_name
			return "highlighted"
		else
			return ""
		end
	end
end
  