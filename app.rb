require 'sinatra'
require_relative 'config/connection'
require_relative 'config/routes'
require 'rake'

set :public_folder, 'static'
