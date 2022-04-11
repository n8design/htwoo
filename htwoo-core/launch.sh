#!/bin/bash
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh

export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion# Add Visual Studio Code (code)
nvm use
cp ./src/plugins ./public/plugins
cp ./src/styleguide/images/* ./public/styleguide/images/
run-p gulp:serve pl:serve
