#!/usr/bin/env groovy

def deploy (env) {

  def base_dir = '/opt/apps/wf-business'
  def tunnelPort = '22001'

  def configs = [
     'uat22': [
        mgt       : 'installer@uat22-mgt',
        server    : 'yyc9-svr-wfsvc1.prod-int.local',
        installer : 'installer'
     ]
  ]

  sshagent([ env ]) {

    def conf = configs.get(env)

    try {

      sh "ssh -M -S ssh-ctrl -fnNT -L ${tunnelPort}:${conf.server}:22 ${conf.mgt}"

      sh """
        ssh -p ${tunnelPort} ${conf.installer}@localhost 'bash -s' < scripts/uninstall.sh ${base_dir}
        ./scripts/tar-deploy.sh | ssh -p ${tunnelPort} ${conf.installer}@localhost tar xf - -C ${base_dir}
        ssh -p ${tunnelPort} ${conf.installer}@localhost 'bash -s' < scripts/install.sh ${base_dir} ${env}
      """

    } finally {
      try {
        sh "ssh -S ssh-ctrl -O exit ${conf.mgt}"
      } catch (err) { }
    }

  }

}

return this
