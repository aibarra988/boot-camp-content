Instructions:

Visit Composer's Downloads page: https://getcomposer.org/download/

Mac and Windows users will need to do slightly different things from here.

Mac Users Run: cd /usr/local/bin, and run the script on the Composer site. You may need sudo.

After installing composer, run this command to move the tool into your path: mv composer.phar /usr/local/bin/composer. This will let you run composer simply by typing composer in your terminal.
Run composer --version in your terminal. Your window should display a version statement. If it instead shows an error message, consult a TA.

Windows Users // Create a directory for Compuser, such as c:\composer, and cd into it. Add this directory to your %PATH%. Then, run the script on the Composer site in the directory you just created. (Alternatively, you can just download and run Composer-Setup.exe)

When you're done, run: composer --version. If it worked, you'll get a version statement.
Now that you have Composer, you can install the Laravel command line tool by running: composer global require "laravel/installer"

If you're on a mac, run this command to add Laravel to your PATH: export PATH="~/.composer/vendor/bin:$PATH"
To verify your Laravel installation, run laravel --version.

This lesson will use Laravel 5.2.x. 5.3.x was written after this draft, and introduces breaking changes to project structure.

Note that you can install Composer on a Mac with homebrew: "brew install composer"
