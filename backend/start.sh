#!/bin/sh

echo "Iniciando AILSBOL WEB en Railway..."

echo "Limpiando cache de Laravel..."
php artisan config:clear
php artisan cache:clear
php artisan route:clear

echo "Ejecutando migraciones..."
php artisan migrate --force

echo "Ejecutando seeders..."
php artisan db:seed --class=RoleSeeder --force
php artisan db:seed --class=AdminUserSeeder --force

echo "Levantando servidor Laravel en puerto 8080..."
php artisan serve --host=0.0.0.0 --port=8080
