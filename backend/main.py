from flask import Flask, jsonify, request, current_app
from flask_cors import CORS, cross_origin

import requests

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)

DOMAINS = []


@app.route('/add_domain', methods=['POST'])
@cross_origin()
def add_domain():
    data = request.json
    domain = data['domain']
    company = _company_by(domain)
    print(company)
    domain = {'name': company['name'], 'logo': company['logo'], 'domain': domain }
    DOMAINS.append(domain)
    response = jsonify({'success': True})
    return response


@app.route('/domains', methods=['get'])
@cross_origin()
def domains():
    response = jsonify(DOMAINS)
    return response


@app.route('/company', methods=['get'])
@cross_origin()
def company():
    name = request.args.get('name')
    for domain in DOMAINS:
        if name == domain['name']:
            company_ = _company_by(domain['domain'])
            response = jsonify(company_)
            return response


if __name__ == '__main__':
    with app.app_context():
        print(current_app.name)
    app.run()


def _company_by(domain):
    return requests.get('https://company.clearbit.com/v2/companies/find?domain=', params={'domain': domain},
                        headers={'Authorization': 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49'}).json()
