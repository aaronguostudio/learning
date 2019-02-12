# My Trail cloud elastic search
- username: elastic
- password: ua5yNTIrn9G2LcAmK0Q7lv7D
- cloud-id: Test:dXMtZWFzdC0xLmF3cy5mb3VuZC5pbyQyMTNiMTk5YjY1YjM0ZWM1ODI3NWQwNzk0NzUxNTI5ZSQ1YmEwMzQ1NGZiMjc0OGEwYmQ0NzM3NmRjMmVjMWY3NA==


# Query examples

POST /inspections/_doc
{
  "business_address": "600 Sacramento S8",
  "business_city": "San Francisco"
}

GET /inspections/_doc/_search

PUT /inspections/_doc/Mqd142gBybCd-f8as_EA
{
  "business_address": "600 Sacramento S6",
  "business_city": "San Francisco"
}

DELETE /inspections

POST /inspections/_doc/_bulk
{ "index": {"_id": 1} }
{"business_address": "600 Sacramento S1", "business_city": "San Francisco"}
{ "index": {"_id": 2} }
{"business_address": "600 Sacramento S2", "business_city": "San Francisco"}
{ "index": {"_id": 3} }
{"business_address": "600 Sacramento S3", "business_city": "San Francisco"}
{ "index": {"_id": 4} }
{"business_address": "600 Sacramento S4", "business_city": "San Francisco"}
{ "index": {"_id": 5} }
{"business_address": "600 Sacramento S5", "business_city": "San Francisco"}
{ "index": {"_id": 6} }
{"business_address": "600 Sacramento S6", "business_city": "San Francisco"}

GET /inspections/_doc/_search
{
  "query": {
    "match": {
      "business_address": "600 Sacramento S6"
    }
  }
}

GET /inspections/_doc/_search
{
  "query": {
    "match_phrase": {
      "business_address": "600 Sacramento S6"
    }
  }
}
  
GET /inspections/_doc/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "match": {
                        "business_name": "soup"
                    }
                },
                {
                    "match_phrase": {
                        "business_name": "san francisco"
                    }
                }
            ]
        }
    }
}  

GET /inspections/_doc/_search
{
    "query": {
        "bool": {
            "must_not": [
                {
                    "match": {
                        "business_name": "soup"
                    }
                }
            ]
        }
    }
}

GET /inspections/_doc/_search
{
    "query": {
        "bool": {
            "should": [
                {
                    "match_phrase": {
                        "business_name": {
                            "query": "soup",
                            "boost": 3             // more weight
                        }       
                    }
                },
                {
                    "match_phrase": {
                        "business_name": {
                            "query": "san francisco"
                        }
                    }
                }
            ]
        }
    }
}

GET /inspections/_doc/_search
{
    "query": {
        "range": {
            "inspection_score": {
                "gte": 80
            }
        }
    },
    "sort": [
        {"inspection_score": "desc"}
    ]
}

<!-- Select by sql -->
POST /_xpack/sql?format=txt
{
  "query": "SELECT business_address, business_city FROM inspections ORDER BY business_city DESC LIMIT 2"
}

GET /inspections/_doc/_search
{
    "query": {
        "match": {
            "business_name": "soup"
        }
    },
    "aggregations": {
        "inspection_score": {
            "range": {
                "field": "inspection_score",
                "ranges": [
                    {
                        "key": "0-80",
                        "from": 0,
                        "to": 80
                    },
                    {
                        "key": "80-90",
                        "from": 81,
                        "to": 90
                    },
                    {
                        "key": "91-100",
                        "from": 91,
                        "to": 100
                    }
                ]
            }
        }
    }
}


