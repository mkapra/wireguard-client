from flask import Flask, request, json
import time

app = Flask(__name__)

@app.route("/peers", methods=['GET'])
def peers():

    sample_peers = {
        "peers": [
            {
                "name": "mkapra_iphone",
                "description": "IPhone von mkapra",
                "interface": "wg0"
            },
            {
                "name": "mkapra_iphone",
                "description": "IPhone von mkapra",
                "interface": "wg0"
            },
            {
                "name": "mkapra_iphone",
                "description": "IPhone von mkapra",
                "interface": "wg0"
            },
            {
                "name": "mkapra_iphone",
                "description": "IPhone von mkapra",
                "interface": "wg0"
            },
            {
                "name": "mkapra_iphone",
                "description": "IPhone von mkapra",
                "interface": "wg0"
            }
        ]
    }

    if request.method == 'GET':
        response = app.response_class(
            response=json.dumps(sample_peers),
            status=200,
            mimetype='application/json'
        )
        return response