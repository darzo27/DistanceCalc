
      
           A_getDistanceFromLatLonInKm(-33.893887, 18.440708, -26.0594802, 28.0609437).toFixed(1);
            function A_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pA_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pAKm").innerHTML = pA_Km.toFixed(2)

                //Km to Miles
                document.getElementById("pAMi").innerHTML = (pA_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pAM").innerHTML = (pA_Km * 1000).toFixed(2);
            }

            function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
        

        
           B_getDistanceFromLatLonInKm(-33.893887, 18.440708, -26.1045986, 27.90272).toFixed(1);
            function B_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pB_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pBKm").innerHTML = pB_Km.toFixed(2);

                //Km to Miles
                document.getElementById("pBMi").innerHTML = (pB_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pBM").innerHTML = (pB_Km * 1000).toFixed(2);

            }
            function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
       
            C_getDistanceFromLatLonInKm(-33.893887, 18.440708, -26.2761961, 27.8666711).toFixed(1);
            function C_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pC_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pCKm").innerHTML = pC_Km.toFixed(2);

                //Km to Miles
                document.getElementById("pCMi").innerHTML = (pC_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pCM").innerHTML = (pC_Km * 1000).toFixed(2);
            }
            function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
      
            D_getDistanceFromLatLonInKm(-33.893887, 18.440708, -26.792252, 28.4546707).toFixed(1);
            function D_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pD_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pDKm").innerHTML = pD_Km.toFixed(2);

                //Km to Miles
                document.getElementById("pDMi").innerHTML = (pD_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pDM").innerHTML = (pD_Km * 1000).toFixed(2);
            }function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
      

            E_getDistanceFromLatLonInKm(-33.893887, 18.440708, -28.5134548, 31.0840026).toFixed(1);
            function E_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pE_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pEKm").innerHTML = pE_Km.toFixed(2);

                //Km to Miles
                document.getElementById("pEMi").innerHTML = (pE_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pEM").innerHTML = (pE_Km * 1000).toFixed(2);
            }function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
      

            F_getDistanceFromLatLonInKm(-33.893887, 18.440708, -28.5691317, 29.965432).toFixed(1);
            function F_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pF_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pFKm").innerHTML = pF_Km.toFixed(2);

                //Km to Miles
                document.getElementById("pFMi").innerHTML = (pF_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pFM").innerHTML = (pF_Km * 1000).toFixed(2);
            }function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
       
            G_getDistanceFromLatLonInKm(-33.893887, 18.440708, -30.0603986, 25.4507278).toFixed(1);
            function G_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pG_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pGKm").innerHTML = pG_Km.toFixed(2);

                //Km to Miles
                document.getElementById("pGMi").innerHTML = (pG_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pGM").innerHTML = (pG_Km * 1000).toFixed(2);
            }function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
      

            H_getDistanceFromLatLonInKm(-33.893887, 18.440708, -33.972869, 18.4426821).toFixed(1);
            function H_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pH_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pHKm").innerHTML = pH_Km.toFixed(2);

                //Km to Miles
                document.getElementById("pHMi").innerHTML = (pH_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pHM").innerHTML = (pH_Km * 1000).toFixed(2);
            }function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
       
            I_getDistanceFromLatLonInKm(-33.893887, 18.440708, -33.9618168, 18.4248128).toFixed(1);
            function I_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pI_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pIKm").innerHTML = pI_Km.toFixed(2);

                //Km to Miles
                document.getElementById("pIMi").innerHTML = (pI_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pIM").innerHTML = (pI_Km * 1000).toFixed(2);
            }function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
        
            J_getDistanceFromLatLonInKm(-33.893887, 18.440708, -33.6606805, 18.4530806).toFixed(1);
            function J_getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1);  // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var pJ_Km = R * c; // Distance in km
                //return pAKm;

                //Km to KM
                document.getElementById("pJKm").innerHTML = pJ_Km.toFixed(2);

                //Km to Miles
                document.getElementById("pJMi").innerHTML = (pJ_Km * 0.62137).toFixed(2);

                //Km to Meters
                document.getElementById("pJM").innerHTML = (pJ_Km * 1000).toFixed(2);
            }

            function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }
        