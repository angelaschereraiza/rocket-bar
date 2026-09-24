.PHONY: deploy deploy_test serve

deploy:
	rsync -av --delete --exclude '.git' . rocket-bar.ch:/var/www/rocket-bar.ch/

deploy_test:
	rsync -av --delete --exclude '.git' . rocket-bar.ch:/var/www/test.rocket-bar.ch/

serve:
	browser-sync start --server --files "*.html" "*.css" "*.js" "images/*"