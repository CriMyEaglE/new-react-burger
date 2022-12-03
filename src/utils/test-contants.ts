import { TIngredient } from "./type";

export const useData = {
   email: 'qw@qw.qw',
   password: 'qwqwqw',
   name: 'qwqwqw'
};
export const ingredientsData: TIngredient[] = [{ "_id": "60d3b41abdacab0026a733c6", "name": "Краторная булка N-200i", "type": "bun", "proteins": 80, "fat": 24, "carbohydrates": 53, "calories": 420, "price": 1255, "image": "https://code.s3.yandex.net/react/code/bun-02.png", "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png", "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png", "__v": 0, id: '0' },
{ "_id": "60d3b41abdacab0026a733c7", "name": "Флюоресцентная булка R2-D3", "type": "bun", "proteins": 44, "fat": 26, "carbohydrates": 85, "calories": 643, "price": 988, "image": "https://code.s3.yandex.net/react/code/bun-01.png", "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png", "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png", "__v": 0, id: '1' },
{ "_id": "60d3b41abdacab0026a733c8", "name": "Филе Люминесцентного тетраодонтимформа", "type": "main", "proteins": 44, "fat": 26, "carbohydrates": 85, "calories": 643, "price": 988, "image": "https://code.s3.yandex.net/react/code/meat-03.png", "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png", "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png", "__v": 0, id: '2' },
{ "_id": "60d3b41abdacab0026a733c9", "name": "Мясо бессмертных моллюсков Protostomia", "type": "main", "proteins": 433, "fat": 244, "carbohydrates": 33, "calories": 420, "price": 1337, "image": "https://code.s3.yandex.net/react/code/meat-02.png", "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png", "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png", "__v": 0, id: '3' }];

export const purpleBun: TIngredient = {
   "_id": "60d3b41abdacab0026a733c7",
   "name": "Флюоресцентная булка R2-D3",
   "type": "bun",
   "proteins": 44,
   "fat": 26,
   "carbohydrates": 85,
   "calories": 643,
   "price": 988,
   "image": "https://code.s3.yandex.net/react/code/bun-01.png",
   "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
   "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
   "__v": 0,
   id: '0'
}

export const blueBun: TIngredient = {
   "_id": "60d3b41abdacab0026a733c6",
   "name": "Краторная булка N-200i",
   "type": "bun",
   "proteins": 80,
   "fat": 24,
   "carbohydrates": 53,
   "calories": 420,
   "price": 1255,
   "image": "https://code.s3.yandex.net/react/code/bun-02.png",
   "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
   "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
   "__v": 0,
   id: '2'
}
export const sauce: TIngredient = {
   "_id": "60d3b41abdacab0026a733cd",
   "name": "Соус фирменный Space Sauce",
   "type": "sauce",
   "proteins": 50,
   "fat": 22,
   "carbohydrates": 11,
   "calories": 14,
   "price": 80,
   "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
   "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
   "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
   "__v": 0,
   id: '3'
}

export const beef: TIngredient = {
   "_id": "60d3b41abdacab0026a733c8",
   "name": "Филе Люминесцентного тетраодонтимформа",
   "type": "main",
   "proteins": 44,
   "fat": 26,
   "carbohydrates": 85,
   "calories": 643,
   "price": 988,
   "image": "https://code.s3.yandex.net/react/code/meat-03.png",
   "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
   "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
   "__v": 0,
   id: '4'
}

export const dragIndex = 1

export const hoverIndex = 2

export const payload = {
   success: true,
   user: {
      email: 'qw@qw.qw',
      name: 'qwqwqw'
   },
}

export const orders = {
   "success": true,
   "orders": [
      {
         'createdAt': "2022-12-01T15:18:46.943Z",
         'ingredients': [
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c7"
         ],
         'name': "Space флюоресцентный бургер",
         'number': 31644,
         'status': "done",
         'updatedAt': "2022-12-01T15:18:47.379Z",
         '_id': "6388c5d69b518a001bb8bb50"
      },
      {
         'createdAt': "2022-12-01T15:10:24.157Z",
         'ingredients': [
            "60d3b41abdacab0026a733c6"
         ],
         'name': "Краторный бургер",
         'number': 31643,
         'status': "done",
         'updatedAt': "2022-12-01T15:10:24.874Z",
         '_id': "6388c3e09b518a001bb8b947"
      }
   ],
   "total": 31643,
   "totalToday": 165
}

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODMyNTk2OWI1MThhMDAxYmI4ODFlZSIsImlhdCI6MTY2OTkwOTUwMSwiZXhwIjoxNjY5OTEwNzAxfQ.ObPWdfN8TiU0axGW46sLvJsT3ZpSFNNHtKgKlUg40u8'

export const baseUrl = 'http://localhost:3000'