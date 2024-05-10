#!/bin/bash
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh

export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion# Add Visual Studio Code (code)
nvm use
npx run-s gulp:docs pl:publish
cp -r ./src/plugins/* ../docs/htwoo-core/plugins/
cp -r ./src/styleguide/images/* ../docs/htwoo-core/styleguide/images/
node helpers/tools/sitemap.js