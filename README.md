# Grunt
## Script básico para deploy de projeto

Esta é uma POC que que realiza deploy simples, movendo arquivos do projeto para dentro de um diretório build, 
concatenando arquivos css e javascript, minificando, alterando seus nomes adicionando um hash no final do arquivo 
e alterando chamada no arquivo HTML.

### Módulos utilizados
* **grunt-contrib-copy: ** Utilizado para copiar os arquivos para dentro do diretório build
* **grunt-contrib-concat: ** Utilizado para concatenar conteúdos dos arquivos css e javascripts criando um único arquivo
* **grunt-contrib-uglify: ** Utilizado para minificar arquivos javascript
* **grunt-contrib-cssmin: ** Utilizado para minificar arquivos css
* **grunt-processhtml: ** Utilizado para alterar conteúdo do arquivo HTML que está entre comentários pelo conteúdo do comentário
* **grunt-contrib-clean: ** Utilizado para apagar arquivos temporários
* **grunt-filerev: ** Utilizado para alterar nome dos arquivos css e javascript adicionando um hash no final do nome
* **grunt-filerev-replace: ** Utilizado para alterar o nome das chamadas dos arquivos css e javascript para o nome dos arquivos hash no final
