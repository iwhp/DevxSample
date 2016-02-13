namespace DevxSample.ErpDomain.CustomerModule.CustomerAggregate
{
    public class Customer
    {
        public Customer(string firstName) {
            this.FirstName = firstName;  
        }
        
        public int CustomerPkId { get; set; }
        public string FirstName { get; set; }
    }
}