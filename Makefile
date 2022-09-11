MGR=npm

all: clean build test
	@printf "Finished, running build process!\n"

clean:
	@printf "Cleaning, directory and removing less session.\n"

build:
	@printf "Starting, the build process...\n"

test:
	@printf "Running, all test processes.\n"
	@sleep 3
	@printf "Done!\n"

