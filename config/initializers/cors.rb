# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

=begin

credentials: "include",

  A RequestCredentials dictionary value indicating whether the user agent should send cookies from the other domain in the case of cross-origin requests. Possible values are:
    omit: Never send or receive cookies.
    same-origin: Send user credentials (cookies, basic http auth, etc..) if the URL is on the same origin as the calling script. This is the default value.
    include: Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.

credentials: true

The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request's credentials mode (Request.credentials) is "include".

When a request's credentials mode (Request.credentials) is "include", browsers will only expose the response to frontend JavaScript code if the Access-Control-Allow-Credentials value is true.

Credentials are cookies, authorization headers or TLS client certificates.

When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials. Note that simple GET requests are not preflighted, and so if a request is made for a resource with credentials, if this header is not returned with the resource, the response is ignored by the browser and not returned to web content.

The Access-Control-Allow-Credentials header works in conjunction with the XMLHttpRequest.withCredentials property or with the credentials option in the Request() constructor of the Fetch API. For a CORS request with credentials, in order for browsers to expose the response to frontend JavaScript code, both the server (using the Access-Control-Allow-Credentials header) and the client (by setting the credentials mode for the XHR, Fetch, or Ajax request) must indicate that they’re opting in to including credentials.

=end



=begin
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'


    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
=end
