<template>
	<q-layout>
		<q-page-container>
		</q-page-container>
	</q-layout>
</template>
<script>

import axios from 'boot/axios'
import { ref } from 'vue'

export default {
  setup () {
    return {
     access_token:ref(null),
    }
  },
  mounted () {
  	this.gettoken();
  },
  methods:{
  	gettoken(){
  		var ps = this;
  		localStorage.setItem('token_cb',"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ3ZmUzNGY3ZWI4ZTZhYzhmZWQ0MTYwNzIwNWE4NmM5N2E4MzE4ZDdkNGY0YmZmZjRlYjg0MzlkN2Y0MDYzNTU0NWNlODgxNmZiMjRiZDE4In0.eyJhdWQiOiIzIiwianRpIjoiZDdmZTM0ZjdlYjhlNmFjOGZlZDQxNjA3MjA1YTg2Yzk3YTgzMThkN2Q0ZjRiZmZmNGViODQzOWQ3ZjQwNjM1NTQ1Y2U4ODE2ZmIyNGJkMTgiLCJpYXQiOjE2NDgxOTQwMjcsIm5iZiI6MTY0ODE5NDAyNywiZXhwIjoxNjc5NzMwMDI3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.optryn2q2isU9OkbwWYfnasv4t8qHii6kzAkt3odl3OGPrxPMiYa_1Caz-G8NRC4qFAU3979KEh64qdkfKw_jq0qQ0Syd7bbx5wbyxaQR1OqXuOI_Nie8DL-U8nVuMvjP6JaRke3SHykuq7WSaNzKQ2VJcIfZy8e-B-Wh9W4deJ--UyoaeVwj3TvCZHQ_lW3HDDB_Avyf3UEWbXqiEsP5DqnVpeHGhunfdwGA2En5bHKM41XmnsFU-4fT1hH2yoXCCPhPGFD3odwFegsXh_tY83tUFZy06h8L_i_VkivpGxIlsZuyLWB_weGw-vi26uzaqGRBO3swdBhN2uQpzveJofMwuITic55NlmKaf0pzGHRdXYOBGuX03OTYb6ES3ASdlga5q-IRydlDJwxkw7bGP0xxiNG_yeUVyDNCWQgQL1Jb4tcP27bc_9eRULj2LQ2St6nF342v2jQegtONzRWXFS_TkbrCekqebgZ-KSNIpFlVG50AtNKMDabtLE_c2DHpFGJEOoFhNVHLb1kFbggbSzHAr74YGVxI9HcK_W37ljsz48UgNEhG3bPwpR3s65BqZmSVJWdpKFhLB7MnBzkkfdHkw9f0zRj_gnW3W9q8z3O3EDRYxhI-pKPOAkAPUtmROQBjxm3S6O9i7Sq7FEYEe2mEZs_063MGPzwsgVm9kU");
  		localStorage.setItem('xid_cb',"2");
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
  		else{	ps.access_token = ps.$store.state.token_cb;	}
  		if(ps.access_token != null || ps.access_token){	
  			ps.$router.push('CheckLocation');
  		}
  	},
  }
}
</script>