set :source, 'src'

data.projects.each do |name, project|
	proxy "/projects/#{name}/index.html", "/projects/template.html", :locals => { :project => project }, :ignore => true
end

configure :development do
    activate :directory_indexes
end

configure :build do
    activate :minify_css
    activate :minify_javascript
end