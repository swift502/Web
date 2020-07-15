require 'slim'

# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Build config
configure :build do
  activate :minify_css
  activate :minify_javascript
end
