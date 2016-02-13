module DevxSample.ErpDomain.CustomerModule.CustomerAggregate {
    /**
     * Descripts a Customer entity.
     */
    export class Customer {
        /**
         * @param firstname The first name of the customer.
         */
        constructor(public firstName: string)
        {
            
        }
        
        public customerPkId: number;
    }
}
    
var customer = new DevxSample.ErpDomain.CustomerModule.CustomerAggregate.Customer('Harry')
console.log(customer.firstName);
