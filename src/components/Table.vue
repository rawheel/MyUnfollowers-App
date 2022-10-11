<template>

<vs-table>
    <template #thead>
      <vs-tr>
        <vs-th>
          NewFollowers
        </vs-th>
        <vs-th>
          UnFollowers
        </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr
        :key="i"
        v-for="(tr, i) in $vs.getPage(data, page, max)"
        :data="tr"
      >
        <vs-td>
          {{ tr.Newfollowers }}
        </vs-td>
        <vs-td>
         {{ tr.Unfollowers }}
        </vs-td>
      </vs-tr>
    </template>
    <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength(data, max)" />
    </template>
  </vs-table>

    
</template>

<script>
export default {
    props: {
        data:Array,
    },
    mounted(){
        console.log('yo hello mountedd data')
        console.log(this.data)
    },
    data(){
        return {
            page:1,
            max:5

        }
    }
    //   data:() => ({
    //     users: [
    //       {
    //         "id": 1,
    //         "name": "Leanne Graham",
    //         "username": "Bret",
    //         "email": "Sincere@april.biz",
    //         "website": "hildegard.org",
    //       },
    //       {
    //         "id": 2,
    //         "name": "Ervin Howell",
    //         "username": "Antonette",
    //         "email": "Shanna@melissa.tv",
    //         "website": "anastasia.net",
    //       },
    //       {
    //         "id": 3,
    //         "name": "Clementine Bauch",
    //         "username": "Samantha",
    //         "email": "Nathan@yesenia.net",
    //         "website": "ramiro.info",
    //       },
    //       {
    //         "id": 4,
    //         "name": "Patricia Lebsack",
    //         "username": "Karianne",
    //         "email": "Julianne.OConner@kory.org",
    //         "website": "kale.biz",
    //       },
    //       {
    //         "id": 5,
    //         "name": "Chelsey Dietrich",
    //         "username": "Kamren",
    //         "email": "Lucio_Hettinger@annie.ca",
    //         "website": "demarco.info",
    //       },
    //       {
    //         "id": 6,
    //         "name": "Mrs. Dennis Schulist",
    //         "username": "Leopoldo_Corkery",
    //         "email": "Karley_Dach@jasper.info",
    //         "website": "ola.org",
    //       },
    //       {
    //         "id": 7,
    //         "name": "Kurtis Weissnat",
    //         "username": "Elwyn.Skiles",
    //         "email": "Telly.Hoeger@billy.biz",
    //         "website": "elvis.io",
    //       },
    //       {
    //         "id": 8,
    //         "name": "Nicholas Runolfsdottir V",
    //         "username": "Maxime_Nienow",
    //         "email": "Sherwood@rosamond.me",
    //         "website": "jacynthe.com",
    //       },
    //       {
    //         "id": 9,
    //         "name": "Glenna Reichert",
    //         "username": "Delphine",
    //         "email": "Chaim_McDermott@dana.io",
    //         "website": "conrad.com",
    //       },
    //       {
    //         "id": 10,
    //         "name": "Clementina DuBuque",
    //         "username": "Moriah.Stanton",
    //         "email": "Rey.Padberg@karina.biz",
    //         "website": "ambrose.net",
    //       }
    //     ]
    //   })
    }
</script>

        
