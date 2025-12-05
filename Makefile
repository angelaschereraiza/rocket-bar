.PHONY: deploy_test serve

deploy:
	rsync -av --delete . rocket-bar.ch/htdocs/ --exclude .git

deploy_test:
	rsync -av --delete . rocket-bar.ch:test/htdocs/ --exclude .git

serve:
	browser-sync start --server --files "*.html" "*.css" "*.js" "images/*"
