require "sinatra/activerecord"
require "sqlite3"

set :database, { adapter: "sqlite3", database: "../db/life.sqlite3", pool: '50'}

register Sinatra::ActiveRecordExtension
