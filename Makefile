.PHONY: deploy deploy_test serve

deploy:
	rsync -av --delete --exclude '.git' -e "ssh -p 17022" . rocket-bar.ch@rocket-bar.ch:_/htdocs/

deploy_test:
	rsync -av --delete --exclude '.git' -e "ssh -p 17022" . rocket-bar.ch@rocket-bar.ch:test/htdocs/

serve:
	browser-sync start --server --files "*.html" "*.css" "*.js" "images/*"
