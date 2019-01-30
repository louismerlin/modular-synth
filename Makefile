build:
		docker build -t modular-synth .
start:
		docker run -d --rm -v $(PWD)/src:/app/src -p 3000:3000 -p 1234:1234 --name modular-synth modular-synth
stop:
		docker stop modular-synth
logs:
		docker logs -f modular-synth