namespace :start do
  desc 'Start dev server'
  task :development do
    exec 'foreman start -f Procfile.dev -p 3000'
  end

# Rake Task start:production will need a package.json in the ROOT of rails app.
# Handy for checking production bundled version before deploying.

# HEROKU: In Procfile, the name web: is important here. It declares that this process type will be attached to the HTTP routing stack of Heroku, and receive web traffic when deployed."

  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
  end
end
task :start => 'start:development'
