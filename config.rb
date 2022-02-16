require "base64"
require 'terser'

# Project structure
set :source, 'src'
set :domain, 'jblaha.art'
activate :directory_indexes

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
	activate :minify_html
	activate :minify_css
	activate :minify_javascript, compressor: Terser.new
end

# Custom functions
helpers do
	def tab_highlight(tab_name)
		if current_page.data.tab == tab_name
			'highlighted'
		else
			''
		end
	end
	def img64(path)
		File.open(path, 'rb') do |img|
		  'data:image/png;base64,' + Base64.strict_encode64(img.read)
		end
	end
end

