require 'slim'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Source directory for the web server
set :source, 'src'

# Build config
configure :build do
  activate :minify_css
  activate :minify_javascript
end
