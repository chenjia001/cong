   test('test1 common matcher', ()=>{
       expect(2+2).toBe(4)
       expect(2+2).not.toBe(5)
   })

   test('test1 to be true or false',()=>{
       expect(1).toBeTruthy()
       expect(0).toBeFalsy()
   })

   test('test1 number',()=>{
       expect(4).toBeGreaterThan(3)
       expect(2).toBeLessThan(3)
   })

   test('test1 object',()=>{
       expect({name:'viking'}).toEqual({name:'viking'})
   })

   // 这种也可以