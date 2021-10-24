from flask import Flask, request, json
import time
import random

app = Flask(__name__)

@app.route("/trafficstats/<interface_id>", methods=['GET'])
def trafficstats(interface_id):
    global_trafficstats_recv_bytes_one = 1006124
    global_trafficstats_sent_bytes_one = 3541852
    global_trafficstats_recv_bytes_two = 46636508
    global_trafficstats_sent_bytes_two = 275215716

    timestamps = [1635079347, 1635209347, 1636202401, 1635043500]
    trafficstats = {}

    for t in timestamps:
        trafficstats[t] = {
            "pfBl+kAvHjz7YtE/lMem9FO59fzUxyUDMANblOS94Tk=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000),
            },
            "1JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "2JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "3JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "4JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "5JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "6JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "7JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "8JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "9JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "11JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "12JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "13JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "14JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "15JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "16JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "17JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            },
            "18JS1J1gvPm1l4rQzWvP0ZalAhrOANm/UHSVW+Lg99PxU=": {
                "server_timestamp": time.time(),
                "bytes_received": random.randrange(100000000),
                "bytes_sent": random.randrange(100000000)
            }
        }

    if request.method == 'GET':
        response = app.response_class(
            response=json.dumps(trafficstats),
            status=200,
            mimetype='application/json'
        )
        return response


@app.route("/conncheck", methods=['POST'])
def conncheck():
    conncheck = {
        "status": "OK",
        "token": "valid"
    }

    if request.method == 'POST':
        response = app.response_class(
            response=json.dumps(conncheck),
            status=200,
            mimetype='application/json'
        )
        return response

@app.route("/version", methods=['GET'])
def version(): 
    version = {
        "api_version": "0.00",
        "api_version_name": "testing"
    }

    if request.method == 'GET':
        response = app.response_class(
            response=json.dumps(version),
            status=200,
            mimetype='application/json'
        )
        return response

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
        time.sleep(0.1)
        return response


@app.route("/dns_servers",  methods=['GET'])
def dns_servers():
    sample_dns_servers = [
        {"id":0,"ip":"192.168.0.1"},
        {"id":1,"ip":"192.168.1.1"},
        {"id":2,"ip":"192.168.2.1"},
        {"id":3,"ip":"192.168.3.1"}
    ]

    if request.method == 'GET':
        response = app.response_class(
            response = json.dumps(sample_dns_servers),
            status=200,
            mimetype='application/json'
        )
        return response



