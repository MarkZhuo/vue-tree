const treeData = [
  {
    "next": [
      {
        "id": "1694675233821",
        "label": "测点条件",
        "operate": [
          [
            {
              "point_sn": "cedian2",
              "op": "EQ",
              "value": "3",
              "duration": 60,
              "point_name": "模拟量测点",
              "device": "1701422911144988672",
              "point_id": "1702214700466573312"
            },
            {
              "point_sn": "cedian1",
              "op": "EQ",
              "duration": 60,
              "point_name": "测点1",
              "device": "1701422911144988672",
              "point_id": "1701423648423940096",
              "value": "2"
            }
          ],
          [
            {
              "point_sn": "cedian",
              "op": "EQ",
              "value": "0",
              "duration": 60,
              "point_name": "测点",
              "device": "1701422911144988672",
              "point_id": "1701423581948416000"
            },
            {
              "point_sn": "cedian2",
              "op": "EQ",
              "duration": 60,
              "point_name": "模拟量测点",
              "device": "1701422911144988672",
              "point_id": "1702214700466573312",
              "value": "1"
            }
          ]
        ],
        "type": "POINT",
        "judge": "init",
        "next": [
          {
            "type": "REMOTE_CONTROL",
            "judge": "true",
            "id": "1694675352710",
            "label": "下发遥控",
            "operate": {
              "url": "http://192.168.10.160:9195/api/v1/iot/common/control",
              "data": {
                "pointControls": [
                  {
                    "value": "1",
                    "pointSn": "yaokong",
                    "deviceSn": "liandongceshi",
                    "deviceId": "1701054297120313344",
                    "pointId": "1701054801460203520"
                  }
                ]
              },
              "topic": "api/v1/gateway/ack/mqtt_yayay",
              "method": "POST",
              "headers": {
                "Authorization": "Bearer qV7FNZRGcjsaUOK9slCg"
              },
              "wait_time": 5
            },
            "next": [
              {
                "type": "REMOTE_TUNING",
                "judge": "false",
                "id": "1694675737687",
                "label": "遥控失败下发遥调",
                "operate": {
                  "url": "http://192.168.10.160:9195/api/v1/iot/common/control",
                  "data": {
                    "pointControls": [
                      {
                        "value": "7",
                        "pointSn": "yaotiao",
                        "deviceSn": "liandongceshi",
                        "deviceId": "1701054297120313344",
                        "pointId": "1701101896862928896"
                      }
                    ]
                  },
                  "topic": "api/v1/gateway/ack/mqtt_yayay",
                  "method": "POST",
                  "headers": {
                    "Authorization": "Bearer qV7FNZRGcjsaUOK9slCg"
                  }
                }
              }
            ]
          },
          {
            "type": "REMOTE_TUNING",
            "judge": "true",
            "id": "1694675418624",
            "label": "下发遥调",
            "operate": {
              "url": "http://192.168.10.160:9195/api/v1/iot/common/control",
              "data": {
                "pointControls": [
                  {
                    "value": "5",
                    "pointSn": "yaotiao",
                    "deviceSn": "liandongceshi",
                    "deviceId": "1701054297120313344",
                    "pointId": "1701101896862928896"
                  }
                ]
              },
              "topic": "api/v1/gateway/ack/mqtt_yayay",
              "method": "POST",
              "headers": {
                "Authorization": "Bearer qV7FNZRGcjsaUOK9slCg"
              },
              "wait_time": 6
            }
          },
          {
            "type": "SERVICE_CALL",
            "judge": "false",
            "id": "1694742342132",
            "label": "调用服务",
            "operate": {
              "url": "http://192.168.10.160:9195/api/v1/iot/common/callService",
              "data": {
                "inputParams": "    { \"zhengxing\":1, \"zifuchuan\": \"dgregre\", \"shuzu\":[\"234\",\"3453\"], \"buer\": true, \"duixiang\":{ \"a\": 5, \"b\":6 }             }",
                "deviceSn": "MJ_001",
                "serviceSn": "kz",
                "serviceName": "控制规则用",
                "deviceId": "1675749520408973312",
                "serviceId": "lLvX7P334"
              },
              "topic": "api/v1/gateway/ack/mqtt_yayay",
              "method": "POST",
              "headers": {
                "Authorization": "Bearer qV7FNZRGcjsaUOK9slCg"
              },
              "wait_time": 0
            }
          },
          {
            "type": "REMOTE_CONTROL",
            "judge": "false",
            "id": "1694675568840",
            "label": "不符合遥控",
            "operate": {
              "url": "http://192.168.10.160:9195/api/v1/iot/common/control",
              "data": {
                "pointControls": [
                  {
                    "value": "0",
                    "pointSn": "yaokong",
                    "deviceSn": "liandongceshi",
                    "deviceId": "1701054297120313344",
                    "pointId": "1701054801460203520"
                  }
                ]
              },
              "topic": "api/v1/gateway/ack/mqtt_yayay",
              "method": "POST",
              "headers": {
                "Authorization": "Bearer qV7FNZRGcjsaUOK9slCg"
              },
              "wait_time": 5
            }
          }
        ]
      },
      {
        "type": "SERVICE_CALL",
        "judge": "init",
        "id": "1694742263326",
        "label": "直接掉服務",
        "operate": {
          "url": "http://192.168.10.160:9195/api/v1/iot/common/callService",
          "data": {
            "inputParams": "{}",
            "deviceSn": "MJ_001",
            "serviceSn": "kz",
            "serviceName": "控制规则用",
            "deviceId": "1675749520408973312",
            "serviceId": "lLvX7P334"
          },
          "topic": "api/v1/gateway/ack/mqtt_yayay",
          "method": "POST",
          "headers": {
            "Authorization": "Bearer qV7FNZRGcjsaUOK9slCg"
          },
          "wait_time": 0
        }
      },
      {
        "id": "1695003677796",
        "label": "hhhh",
        "operate": [],
        "type": "POINT",
        "judge": "init"
      }
    ],
    "type": "INIT",
    "judge": "init",
    "operate": [],
    "id": "1",
    "parentId": "0",
    "key": "1",
    "label": "回归bug"
  }
]

export default treeData
