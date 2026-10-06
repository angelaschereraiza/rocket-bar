.PHONY: deploy deploy_test serve

RSYNC_FLAGS = -av --delete --exclude ".git" --exclude "README.md" --exclude "Makefile" --exclude "images/img_resize.sh"

deploy:
	rsync $(RSYNC_FLAGS) . rocket-bar.ch:/var/www/rocket-bar.ch/

deploy_test:
	rsync $(RSYNC_FLAGS) . rocket-bar.ch:/var/www/test.rocket-bar.ch/

serve:
	browser-sync start --server --files "*.html" "*.css" "*.js" "images/*"
