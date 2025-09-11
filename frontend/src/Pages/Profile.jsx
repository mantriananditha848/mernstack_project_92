import React, { use, useEffect, useState } from 'react'
import {Avatar} from '@mantine/core';


import Service from '../utils/http'
import { Center, Text } from '@mantine/core';
const obj = new Service();


export default function Profile() {


   const [user, setUser] = useState({})


   const getProfileData = async () => {
       try {
           let data = await obj.get("user/me")
           setUser(data)
           console.log(data);
       } catch (error) {
           console.log(error);
       }
   }
   useEffect(() => {


       getProfileData();
   }, [])


   return (
    <div>
      <Center>
        <Avatar
          src={user?.avatar}  
          size="xl"              
          radius="xl"            // makes it round
        />
      </Center>
      
      
      <Center mt="sm">
        <Text color="red" size="lg">
          {user?.name}
        </Text>
      </Center>

      <Center mt="sm">
        <Text color="red" size="lg">
          {user?.email}
        </Text>
      </Center>

      <Center mt="sm">
        <Text color="red" size="lg">
          User Id: {user?._id}
        </Text>
      </Center>

       <Center mt="sm">
        <Text color="red" size="lg">
           {user?._id}
        </Text>
      </Center>
       
    </div>
  );
}

