set :source, 'src'

configure :development do
    activate :directory_indexes
end

configure :build do
    activate :minify_css
    activate :minify_javascript
end