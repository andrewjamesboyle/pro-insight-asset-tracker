import createList from '../services/createList'
import matchList from '../services/matchList'
import { viewList } from '../services/viewList'
import { Request, Response, Router } from 'express';

const contacts = [
    {
      FullName: 'ABELINA TORAL',
      Address: '417 HILDA ST',
      City: 'OREGON CITY',
      State: 'OR',
      ZipFive: 97045,
    },
  {
    FullName: 'ADAM R KRISS',
    Address: '1422 SE 209TH AVE',
    City: 'GRESHAM',
    State: 'OR',
    ZipFive: 97030,
  },
  {
    FullName: 'ADAM SLAUGHTER',
    Address: '16857 S HOLCOMB BLVD',
    City: 'OREGON CITY',
    State: 'OR',
    ZipFive: 97045,
  }]

  module.exports = Router()
    .post('/', async (req: Request, res: Response) => {
    try {
        console.log("request body", req.body)
        const listData: any = await createList().catch((error) => {
          throw new Error(`Error creating list: ${error.message}`)
        })
    
        if (!listData.results) {
          throw new Error('Error creating list: no results')
        }
    
        // To Do: Write ListID into DB
    
        const ListID = listData.results[0].ListID
        await matchList(ListID, contacts).catch((error) => {
          throw new Error('Error matching list: ' + error.message)
        })
    
        const contactsInList = await viewList(ListID).catch((error) => {
          throw new Error('Error viewing list: ' + error.message)
        })
    
        // const properties = contactsInList.results.map((contact) => {})
        // To Do: const properties = extract radar ID's from contacts in List
        // To Do: DB.create(properties)
        // To Do: const additionalProperties = GET request to viewOwners to grab additional Radar ID's and personKeys for each owner
        // To Do: DB.update(additionalProperties)
        // To Do: const propDetails = for each radar ID, GET request to properties from radar ID for details
        // To Do: DB.update(propDetails)
        res.status(200)
        // return {
        //   statusCode: 200,
        //   body: JSON.stringify(contactsInList),
        // }
      } catch (error) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Bad Request: '}),
        }
      }
  })

// export const handler = async (req: Request, res: Response) => {
  

//   try {
//     const listData: any = await createList().catch((error) => {
//       throw new Error(`Error creating list: ${error.message}`)
//     })

//     if (!listData.results) {
//       throw new Error('Error creating list: no results')
//     }


//     const ListID = listData.results[0].ListID
//     await matchList(ListID, contacts).catch((error) => {
//       throw new Error('Error matching list: ' + error.message)
//     })

//     const contactsInList = await viewList(ListID).catch((error) => {
//       throw new Error('Error viewing list: ' + error.message)
//     })


//     return {
//       statusCode: 200,
//       body: JSON.stringify(contactsInList),
//     }
//   } catch (error) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify({ error: 'Bad Request: '}),
//     }
//   }
// }


// {
//   FullName: 'ADRIAN RADUTIU',
//   Address: '16049 SE PEACE CT',
//   City: 'HAPPY VALLEY',
//   State: 'OR',
//   ZipFive: 97086,
// },
// {
//   FullName: 'ALEXANDR BACHINSKY',
//   Address: '14071 SE SUNSHADOW ST',
//   City: 'HAPPY VALLEY',
//   State: 'OR',
//   ZipFive: 97086,
// },
// {
//   FullName: 'ALEKSANDR KOTELYANETS',
//   Address: '711 JUNE DR',
//   City: 'MOLALLA',
//   State: 'OR',
//   ZipFive: 97038,
// },
// {
//   FullName: 'ALEXA L PATTI',
//   Address: '16600 S PAM DR',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ALICIA MARIE CURTISS',
//   Address: '45583 SEAGULL WAY',
//   City: 'TEMECULA',
//   State: 'CA',
//   ZipFive: 92592,
// },
// {
//   FullName: 'ALLISON R WEAVER',
//   Address: '18739 SUNBLAZE DR',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ALYSSA BECK',
//   Address: '527 NW ELM ST',
//   City: 'CAMAS',
//   State: 'WA',
//   ZipFive: 98607,
// },
// {
//   FullName: 'ALYSSA L BRITTON',
//   Address: '19435 ORCHARD GROVE DR',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ALYSSA HANSEN',
//   Address: '12713 VILLARD PL',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'AMANDA WHITMAN',
//   Address: '16625 S REDLAND RD',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'AMANDA M EDWARDS',
//   Address: '2136 N LOCUST ST',
//   City: 'CANBY',
//   State: 'OR',
//   ZipFive: 97013,
// },
// {
//   FullName: 'AMANDA HOLLIS',
//   Address: '14018 S SPANGLER RD',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'AMIE M KILGORE',
//   Address: '200 NW 95TH ST',
//   City: 'REDMOND',
//   State: 'OR',
//   ZipFive: 97756,
// },
// {
//   FullName: 'AMY ROEGER',
//   Address: '16632 TUDOR DR',
//   City: 'GLADSTONE',
//   State: 'OR',
//   ZipFive: 97027,
// },
// {
//   FullName: 'AMY COOK',
//   Address: '5845 SE HULL AVE',
//   City: 'MILWAUKIE',
//   State: 'OR',
//   ZipFive: 97267,
// },
// {
//   FullName: 'AMY E SCHAFER',
//   Address: '13830 SE CENTER ST',
//   City: 'PORTLAND',
//   State: 'OR',
//   ZipFive: 97236,
// },
// {
//   FullName: 'ANABELA A PARIS',
//   Address: '13390 EASTBORNE DR',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ANABELA A PARIS',
//   Address: '2670 W SEGERSTROM AVE D',
//   City: 'SANTA ANA',
//   State: 'CA',
//   ZipFive: 92704,
// },
// {
//   FullName: 'ANDREA D GARCIA',
//   Address: '1045 COLUMBIA AVE',
//   City: 'GLADSTONE',
//   State: 'OR',
//   ZipFive: 97027,
// },
// {
//   FullName: 'ANDREW J ROBERGE',
//   Address: '1641 SW MIRANDA PL',
//   City: 'TROUTDALE',
//   State: 'OR',
//   ZipFive: 97060,
// },
// {
//   FullName: 'ANDREW D HUNGERFORD',
//   Address: '13238 S SPANGLER RD',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ANGELA HESS',
//   Address: '18221 S SILVERWOOD DR 259',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ANGELA PETTIT',
//   Address: '15337 S MAPLELANE RD',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ANJALI BATES',
//   Address: '14060 S CANYON RIDGE DR',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ANN E HOVDA',
//   Address: '13705 SE 117TH CT',
//   City: 'CLACKAMAS',
//   State: 'OR',
//   ZipFive: 97015,
// },
// {
//   FullName: 'ANNE SADOWSKI',
//   Address: '30902 NE SPUD MOUNTAIN RD',
//   City: 'CAMAS',
//   State: 'WA',
//   ZipFive: 98607,
// },
// {
//   FullName: 'APRIL D MOLES',
//   Address: '13171 GAFFNEY LN',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'AREND M KOLEN',
//   Address: '16642 S ANNETTE DR',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ARLIN HERNANDEZ',
//   Address: '4102 SYLVIA ST SE',
//   City: 'SALEM',
//   State: 'OR',
//   ZipFive: 97317,
// },
// {
//   FullName: 'ARNOLD KELLER',
//   Address: '4401 SE HARRISON ST',
//   City: 'MILWAUKIE',
//   State: 'OR',
//   ZipFive: 97222,
// },
// {
//   FullName: 'ASHLEY E OLIPHANT',
//   Address: '14635 COLTRANE ST',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ASHLEY E TODD',
//   Address: '966 N BIRCH ST',
//   City: 'CANBY',
//   State: 'OR',
//   ZipFive: 97013,
// },
// {
//   FullName: 'ASHLEY M BEHRENDT',
//   Address: '13260 DEER MEADOWS RD',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'AUSTIN FIELDS',
//   Address: '215 SMITH ST',
//   City: 'SILVERTON',
//   State: 'OR',
//   ZipFive: 97381,
// },
// {
//   FullName: 'APRIL SMITH',
//   Address: '532 DIVISION ST',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'R ALAN CURTEMAN',
//   Address: '21685 S MCBURNEY RD',
//   City: 'BEAVERCREEK',
//   State: 'OR',
//   ZipFive: 97004,
// },
// {
//   FullName: 'BARBARA K LARSON',
//   Address: '1414 SE 208TH AVE',
//   City: 'GRESHAM',
//   State: 'OR',
//   ZipFive: 97030,
// },
// {
//   FullName: 'BENJAMIN M SMITH',
//   Address: '20856 S SPRINGWATER RD',
//   City: 'ESTACADA',
//   State: 'OR',
//   ZipFive: 97023,
// },
// {
//   FullName: 'BENJAMIN H SMALLEY',
//   Address: '730 ANDRIAN DR',
//   City: 'MOLALLA',
//   State: 'OR',
//   ZipFive: 97038,
// },
// {
//   FullName: 'BENJAMIN M BURKLUND',
//   Address: '1112 MEADOW DR',
//   City: 'MOLALLA',
//   State: 'OR',
//   ZipFive: 97038,
// },
// {
//   FullName: 'MARTA DRAGOMIR',
//   Address: '4517 SE HILL RD',
//   City: 'MILWAUKIE',
//   State: 'OR',
//   ZipFive: 97267,
// },
// {
//   FullName: 'ALBINA ELIZABETH ANDERSON',
//   Address: '12838 S BARNARDS RD',
//   City: 'MOLALLA',
//   State: 'OR',
//   ZipFive: 97038,
// },
// {
//   FullName: 'ANDREW JAY KEEN',
//   Address: '174 KING ST',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'BETINA MORTENSEN',
//   Address: '5807 SE 99TH AVE',
//   City: 'PORTLAND',
//   State: 'OR',
//   ZipFive: 97266,
// },
// {
//   FullName: 'BETSY Z BOTHWELL',
//   Address: '202 E 3RD ST',
//   City: 'MOLALLA',
//   State: 'OR',
//   ZipFive: 97038,
// },
// {
//   FullName: 'AMANDA ROBERGE',
//   Address: '1641 SW MIRANDA PL',
//   City: 'TROUTDALE',
//   State: 'OR',
//   ZipFive: 97060,
// },
// {
//   FullName: 'TROY L LAYTON',
//   Address: '622 JUNE DR',
//   City: 'MOLALLA',
//   State: 'OR',
//   ZipFive: 97038,
// },
// {
//   FullName: 'WILLIAM R DAVEY',
//   Address: '29701 S MARSHALL RD',
//   City: 'MULINO',
//   State: 'OR',
//   ZipFive: 97042,
// },
// {
//   FullName: 'BLAZE C RIGGINS',
//   Address: '19714 CHERRYWOOD WAY',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ROBERT W MUELLER',
//   Address: '19427 WESTWOOD DR',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'ROBERT M GANGWER',
//   Address: '16888 SE MADUROS CT',
//   City: 'DAMASCUS',
//   State: 'OR',
//   ZipFive: 97089,
// },
// {
//   FullName: 'BRANDEE L OSTER',
//   Address: '651 SE 137TH AVE',
//   City: 'PORTLAND',
//   State: 'OR',
//   ZipFive: 97233,
// },
// {
//   FullName: 'BRANDON S HANSON',
//   Address: '16401 HUNTER AVE',
//   City: 'OREGON CITY',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'BRANDON A LAMM',
//   Address: '700 NE FOOTHILLS DR',
//   City: 'ESTACADA',
//   State: 'OR',
//   ZipFive: 97023,
// },
// {
//   FullName: 'BRANDON SMITH',
//   Address: '22610 S FOREST PARK RD',
//   City: 'BEAVERCREEK',
//   State: 'OR',
//   ZipFive: 97004,
// },
// {
//   FullName: 'Adrienne Jess',
//   Address: '28240 SW Paris Ave',
//   City: 'Wilsonville',
//   State: 'OR',
//   ZipFive: 97070,
// },
// {
//   FullName: 'Alan Curteman',
//   Address: '21685 South McBurney Road',
//   City: 'Beavercreek',
//   State: 'OR',
//   ZipFive: 97004,
// },
// {
//   FullName: 'Alberto Hernandez',
//   Address: '685 Andrian Dr',
//   City: 'Molalla',
//   State: 'OR',
//   ZipFive: 97038,
// },
// {
//   FullName: 'Alejandra Mendoza',
//   Address: '8510 Southeast Down Way',
//   City: 'Milwaukie',
//   State: 'OR',
//   ZipFive: 97267,
// },
// {
//   FullName: 'Alex Andras',
//   Address: '15248 S Carus Rd',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Alex Grigorov',
//   Address: '15058 SE Armel Dr',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Alex Koval',
//   Address: '16337 Chapin Way',
//   City: 'Lake Oswego',
//   State: 'OR',
//   ZipFive: 97034,
// },
// {
//   FullName: 'Alexis Myhrum',
//   Address: '15471 Penny Avenue',
//   City: 'Sandy',
//   State: 'OR',
//   ZipFive: 97055,
// },
// {
//   FullName: 'Alise Varella',
//   Address: '7373 Southeast Clackamas Road',
//   City: 'Milwaukie',
//   State: 'OR',
//   ZipFive: 97267,
// },
// {
//   FullName: 'Alyssa Christensen',
//   Address: '9354 Saint Paul Highway Northeast',
//   City: 'Aurora',
//   State: 'OR',
//   ZipFive: 97002,
// },
// {
//   FullName: 'Amanda Cox',
//   Address: '1606 Northeast 156th Street',
//   City: 'Vancouver',
//   State: 'WA',
//   ZipFive: 98686,
// },
// {
//   FullName: 'Amanda White',
//   Address: '8640 Southeast Causey Avenue Apt Q103',
//   City: 'Happy Valley',
//   State: 'OR',
//   ZipFive: 97086,
// },
// {
//   FullName: 'Amber & Timothy Gunter',
//   Address: '15450 South Tioga Road',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Amber McLean',
//   Address: '6525 SE Jordan St',
//   City: 'Milwaukie',
//   State: 'OR',
//   ZipFive: 97222,
// },
// {
//   FullName: 'Amie Krueger',
//   Address: '9641 SE Harold St',
//   City: 'Portland',
//   State: 'OR',
//   ZipFive: 97266,
// },
// {
//   FullName: 'Amy Reusser',
//   Address: '21611 Oregon 213',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'and Brenda & Ed Milano Jr',
//   Address: '27419 V Street',
//   City: 'Ocean Park',
//   State: 'WA',
//   ZipFive: 98640,
// },
// {
//   FullName: 'Andrew Worthington',
//   Address: '17818 South Harding Road',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Andrew Turner',
//   Address: '1475 Northeast Kristie Lane',
//   City: 'Estacada',
//   State: 'OR',
//   ZipFive: 97023,
// },
// {
//   FullName: 'Andy Laken',
//   Address: '3632 NE 66th Ave',
//   City: 'Portland',
//   State: 'OR',
//   ZipFive: 97213,
// },
// {
//   FullName: 'Angela Atkins',
//   Address: '13418 Squire Drive',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: "Angela O'Dell",
//   Address: '640 Lakota Lane',
//   City: 'Molalla',
//   State: 'OR',
//   ZipFive: 97038,
// },
// {
//   FullName: 'Angela Pederson',
//   Address: '17678 South Gronlund Road',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Angie Gonzalez',
//   Address: 'PO Box 3065',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Ann McFall',
//   Address: '22514 Southeast Stark Street #120',
//   City: 'Gresham',
//   State: 'OR',
//   ZipFive: 97030,
// },
// {
//   FullName: 'Anna Demouchet',
//   Address: '2555 SW Elmhurst Ave',
//   City: 'Beaverton',
//   State: 'OR',
//   ZipFive: 97005,
// },
// {
//   FullName: 'Anna Shelton',
//   Address: '18703 Sunblaze Drive',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Anna Lerum',
//   Address: '12651 Trade Wind Street',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'April Smith',
//   Address: '532 Division St',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Arlin Hernandez',
//   Address: '4102 Sylvia Street Southeast',
//   City: 'Salem',
//   State: 'OR',
//   ZipFive: 97317,
// },
// {
//   FullName: 'Ashley Wolfe',
//   Address: '1102 Simmons Street',
//   City: 'Gladstone',
//   State: 'OR',
//   ZipFive: 97027,
// },
// {
//   FullName: 'Audra Fullen',
//   Address: '13920 Conway Drive',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Barbara Dietz',
//   Address: '2438 SE 190th Ave',
//   City: 'Portland',
//   State: 'OR',
//   ZipFive: 97233,
// },
// {
//   FullName: 'Barbara Dalling',
//   Address: '43641 Riverpoint Dr',
//   City: 'Leesburg',
//   State: 'VA',
//   ZipFive: 20176,
// },
// {
//   FullName: 'Benjamin Parsons',
//   Address: '11098 Southwest Marilyn Street',
//   City: 'Tualatin',
//   State: 'OR',
//   ZipFive: 97062,
// },
// {
//   FullName: 'Benny Damian',
//   Address: '5987 SE Robhil Dr',
//   City: 'Milwaukie',
//   State: 'OR',
//   ZipFive: 97222,
// },
// {
//   FullName: 'Betsy Gunderson',
//   Address: '419 Irving Street',
//   City: 'Oregon City',
//   State: 'OR',
//   ZipFive: 97045,
// },
// {
//   FullName: 'Bev Woster',
//   Address: '12906 S Bobby Bruce Lane',
//   City: 'Boring',
//   State: 'OR',
//   ZipFive: 97009,
// },
// {
//   FullName: 'Blanca Skaggs',
//   Address: '33760 S Dickey Prairie Rd',
//   City: 'Molalla',
//   State: 'OR',
//   ZipFive: 97038,
// },
// {
//   FullName: 'Bob and Mary Jane Hevlin',
//   Address: '718 E Lincoln St',
//   City: 'Carlton',
//   State: 'OR',
//   ZipFive: 97111,
// },
// {
//   FullName: 'Bob Hanley',
//   Address: '20943 SE Main Drive',
//   City: 'Gresham',
//   State: 'OR',
//   ZipFive: 97030,
// },
// {
//   FullName: 'Bonnie Jeruis',
//   Address: '5661 1st Court',
//   City: 'West Linn',
//   State: 'OR',
//   ZipFive: 97068,
// },
// ]
