SELECT * FROM USAirlineFlights2.Flights;
SELECT * FROM USAirlineFlights2.USAirports;
SELECT * FROM USAirlineFlights2.Carriers;

SELECT UniqueCarrier, AVG(ArrDelay) FROM USAirlineFlights2.Flights GROUP BY UniqueCarrier;


SELECT TailNum, Sum(Distance) FROM USAirlineFlights2.Flights GROUP BY TailNum;

SELECT UniqueCarrier, colYear, colMonth, Sum(Cancelled) FROM USAirlineFlights2.Flights GROUP BY UniqueCarrier, colYear, colMonth;
SELECT Origin, City FROM USAirlineFlights2.Flights, USAirlineFlights2.USAirports WHERE Origin =  IATA;

SELECT Origin, AVG(ArrDelay) AS AverageArrivalDelay, AVG(DepDelay) AS AverageDepartureDelay   FROM USAirlineFlights2.Flights GROUP BY Origin;
SELECT City, colYear, colMonth, ArrDelay  FROM USAirlineFlights2.Flights, USAirlineFlights2.USAirports WHERE Origin =  IATA;