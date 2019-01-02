extension.zip:
	zip -r extension.zip ./ -x "Makefile"

build: extension.zip

clean:
	rm extension.zip