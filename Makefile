.PHONY: deploy_test serve

deploy_test:
	rsync -av --delete . aiza.ch:test/htdocs/ --exclude node_modules --exclude .git

serve:
	browser-sync start --server --files "*.html" "*.css" "*.js" "images/*"
