import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Meet from '@/components/Meet'
import MeetView from '@/components/MeetView'
import MeetSignUp from '@/components/MeetSignUp'
import MeetSignUpSucces from '@/components/MeetSignUpSucces'
import MeetSign from '@/components/MeetSign'
import MeetSignSucces from '@/components/MeetSignSucces'
import TrainSign from '@/components/TrainSign'
import TrainSignSucces from '@/components/TrainSignSucces'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
      path: '/meet',
      name: 'Meet',
      component: Meet
    },{
      path: '/meetView',
      name: 'MeetView',
      component: MeetView
    },{
      path: '/meetSignUp',
      name: 'MeetSignUp',
      component: MeetSignUp
    },{
      path: '/meetSignUpSucces',
      name: 'MeetSignUpSucces',
      component: MeetSignUpSucces
    },{
      path: '/meetSign',
      name: 'MeetSign',
      component: MeetSign
    },{
      path: '/meetSignSucces',
      name: 'MeetSignSucces',
      component: MeetSignSucces
    },{
      path: '/trainSign',
      name: 'TrainSign',
      component: TrainSign
    },{ 
      path: '/trainSignSucces',
      name: 'TrainSignSucces',
      component: TrainSignSucces
    }
  ] 
})
 