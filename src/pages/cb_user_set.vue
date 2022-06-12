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
      sessionStorage.removeItem('token_cb');
      sessionStorage.removeItem('xid_cb');
      //test
  		// sessionStorage.setItem('token_cb',"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ3ZmUzNGY3ZWI4ZTZhYzhmZWQ0MTYwNzIwNWE4NmM5N2E4MzE4ZDdkNGY0YmZmZjRlYjg0MzlkN2Y0MDYzNTU0NWNlODgxNmZiMjRiZDE4In0.eyJhdWQiOiIzIiwianRpIjoiZDdmZTM0ZjdlYjhlNmFjOGZlZDQxNjA3MjA1YTg2Yzk3YTgzMThkN2Q0ZjRiZmZmNGViODQzOWQ3ZjQwNjM1NTQ1Y2U4ODE2ZmIyNGJkMTgiLCJpYXQiOjE2NDgxOTQwMjcsIm5iZiI6MTY0ODE5NDAyNywiZXhwIjoxNjc5NzMwMDI3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.optryn2q2isU9OkbwWYfnasv4t8qHii6kzAkt3odl3OGPrxPMiYa_1Caz-G8NRC4qFAU3979KEh64qdkfKw_jq0qQ0Syd7bbx5wbyxaQR1OqXuOI_Nie8DL-U8nVuMvjP6JaRke3SHykuq7WSaNzKQ2VJcIfZy8e-B-Wh9W4deJ--UyoaeVwj3TvCZHQ_lW3HDDB_Avyf3UEWbXqiEsP5DqnVpeHGhunfdwGA2En5bHKM41XmnsFU-4fT1hH2yoXCCPhPGFD3odwFegsXh_tY83tUFZy06h8L_i_VkivpGxIlsZuyLWB_weGw-vi26uzaqGRBO3swdBhN2uQpzveJofMwuITic55NlmKaf0pzGHRdXYOBGuX03OTYb6ES3ASdlga5q-IRydlDJwxkw7bGP0xxiNG_yeUVyDNCWQgQL1Jb4tcP27bc_9eRULj2LQ2St6nF342v2jQegtONzRWXFS_TkbrCekqebgZ-KSNIpFlVG50AtNKMDabtLE_c2DHpFGJEOoFhNVHLb1kFbggbSzHAr74YGVxI9HcK_W37ljsz48UgNEhG3bPwpR3s65BqZmSVJWdpKFhLB7MnBzkkfdHkw9f0zRj_gnW3W9q8z3O3EDRYxhI-pKPOAkAPUtmROQBjxm3S6O9i7Sq7FEYEe2mEZs_063MGPzwsgVm9kU");
      // live
      sessionStorage.setItem('token_cb',"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZlZWE3OWM3MGIzYjM0ZmRkMWE2MzdlMTEwOTMwOGNjNzg4ZTJlMWI0ZGY0NDhmNGM3YWIyMjJjNzQyM2ExZWEwZDAxNTU5MGI0MzY1NTU3In0.eyJhdWQiOiIzIiwianRpIjoiNmVlYTc5YzcwYjNiMzRmZGQxYTYzN2UxMTA5MzA4Y2M3ODhlMmUxYjRkZjQ0OGY0YzdhYjIyMmM3NDIzYTFlYTBkMDE1NTkwYjQzNjU1NTciLCJpYXQiOjE2NDkyNDc4OTAsIm5iZiI6MTY0OTI0Nzg5MCwiZXhwIjoxNjgwNzgzODkwLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.Bqh4V7R6jIbKrPYLCmFaOzzTnfryJ0Xisl-FllfIa8b2PJhkQQl60MGdCp241EE2uTQS3UYo_gIZDCHHjQ2WqOEwY0-f5SNWhoDQ2qY78bz0U7f0KuoAXBAwahXuCFYZYJ-8hgPLpjlzc4eBFtAcb_LhIlOYWtqIC8tLOAK9oar_GuLcQDNlREg8dW46uS5wiaX4PfSVzszFfD7lNdkGVm-sjxdNV9nyRNrQZ7wMFNU5q1R3hG40jeQvBFsI3hAMK-euWJuLFVzW0R2hwAMGzD9ncx4G5SOHORt1eXJdNHIzjEyNhhSa7POudMnSJDB1sKqPVV6XvqAP3ryeBtyn69MuPl5LDGgJCJd_4LJYL43attrquVR-F9dkhEGOczhAYJf712HsXdQ61CbMwLecGm-yid2DeKEG6OqCW6Mc8u8otmeyxb_u0HP4b-qbinV_vfBTdW_McVROr6MJGrm2mS-fUVrPjFX8ZUW1cwpSKwpg7z3E6ysfbBNN5CHZ8X21f5_sGXpIci1WqFZFIpjusSyoXE2PZgTUGOrWD_W8dJUkT0hHuZwftdUrgSPVSWM0STKJTIw7yWVRj1Bh4GXVc4PSC2eem4_5jtIV12k2V04mJZS35Kg7yZF2ksQEKQWJXVlDdgVIoyZ7YgwiHlXRXySB4b9b_uzdxZneMjxsFVo");
  		sessionStorage.setItem('xid_cb',"2");
  		if(ps.$store.state.token){ ps.access_token = ps.$store.state.token;  }
  		else{	ps.access_token = ps.$store.state.token_cb; 	}
  		ps.redirect_checklocation();
  	},
    redirect_checklocation(){
      var ps = this;
      if(ps.access_token != null || ps.access_token){ 
        ps.$router.push('CheckLocation');
      }else{
       location.reload();
      }
    }
  }
}
</script>