fx_version 'bodacious'
game 'gta5'

description 'QB-Phone With Passcode'
version '1.3.0'

ui_page 'html/index.html'

shared_scripts {
    'config.lua',
    '@qb-apartments/config.lua',
    '@qb-garages/config.lua',
}

client_scripts {
    'client/main.lua',
    'client/animation.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/main.lua'
}

files {
    'html/*.html',
    'html/img/*.webp',
    'html/js/*.js',
    'html/img/*.png',
    'html/img/*.jpg',
    'html/css/*.css',
    'html/img/backgrounds/*.png',
    'html/img/Icons/*.png',
    'html/img/apps/*.png',
    'html/fonts/*.ttf',
    'html/fonts/*.otf',
    'html/fonts/*.woff',
}

lua54 'yes'