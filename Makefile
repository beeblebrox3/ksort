extension.zip:
	zip -r extension.zip ./ -x "Makefile" -x ".git*" -x ".idea/*" -x ".vscode/*"

build: extension.zip

clean:
	rm extension.zip
