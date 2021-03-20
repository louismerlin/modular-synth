build:
		docker build -t modular-synth .
start: build
		docker run -d --rm -v $(PWD)/public:/app/public -p 8080:8080 --name modular-synth modular-synth npm start
stop:
		docker stop modular-synth
logs:
		docker logs -f modular-synth
