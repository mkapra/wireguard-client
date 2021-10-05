from flask import Flask, request, json
import time

app = Flask(__name__)

@app.route("/peers", methods=['GET'])
def peers():

    sample_peers = [
        {"id":"0","name": "mkapra_iphone","description": "IPhone von mkapra","interface_id": "0"},
        {"id":"1","name": "mkapra_iphone","description": "IPhone von mkapra","interface_id": "0"},
        {"id":"2","name": "mkapra_iphone","description": "IPhone von mkapra","interface_id": "0"},
        {"id":"3","name": "mkapra_iphone","description": "IPhone von mkapra","interface_id": "0"},
        {"id":"4","name": "mkapra_iphone","description": "IPhone von mkapra","interface_id": "0"}
    ]

    if request.method == 'GET':
        response = app.response_class(
            response=json.dumps(sample_peers),
            status=200,
            mimetype='application/json'
        )
        return response

@app.route("/interfaces", methods=['GET'])
def interfaces():
    sample_interfaces = [
        {"id":0,"priv_key":"123","pub_key":"1234"},
        {"id":1,"priv_key":"qKD4n1KxaTw+tSAWfLCMudOidfQDR37zGQlLxEWdlXI=","pub_key":"tRrFijO98NDl5mKZCMx5Wj64ytY7u3nDkQFQwiYdQQY="},
        {"id":2,"priv_key":"AJ/pcJt2TLU/UDplYVenobJKrAqrTzX33r4uXEy+v3U=","pub_key":"Cuq/iEgfGU0ZdTowlT9avd68+sX5BltBW+m2oBXPMws="},
        {"id":3,"priv_key":"kGbMOyVwfbmTqIZPbyHvME9tvFtHL2/GWCTWteiKg1Y=","pub_key":"QYhDmmcOr75Ja+JxTzW37+hGGPYiJfiPJWrLglXgdwk="},
        {"id":4,"priv_key":"uJiNRztTy/XHoXI5ZCE90Gh69kA5qlKVf61jcoc+L04=","pub_key":"VtPu0TcZ8blEbk5+GV1xCrjHLaZmCZuVghURcfeMpx4="},
        {"id":5,"priv_key":"MOZhHyKmleW2gvFPFlYG+NcqbTP9UPr5nSJ/E3flU1A=","pub_key":"zkWD1g0Ley8vuvvPywQ9tfbtp+xuJ2zSmA/n7/GWASA="}
   ]

    if request.method == 'GET':
        response = app.response_class(
            response = json.dumps(sample_interfaces),
            status=200,
            mimetype='application/json'
        )
        return response






