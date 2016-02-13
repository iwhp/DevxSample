using System;
using DevxSample.ErpDomain.CustomerModule.CustomerAggregate;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            
            Customer customer = new Customer("Harry");
            Console.WriteLine(customer.FirstName);
        }
    }
}
