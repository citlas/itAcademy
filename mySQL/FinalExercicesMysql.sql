SELECT * FROM usairlineflights2.flights;

/*Cambiar los valores que tenian NA que cambié por -32768 por NULL*/
UPDATE usairlineflights2.flights SET ArrDelay = NULL WHERE ArrDelay = '-32768';
UPDATE usairlineflights2.flights SET CRSElapsedTime = NULL WHERE CRSElapsedTime = '-32768';
UPDATE usairlineflights2.flights SET Distance = NULL WHERE Distance = '-32768';
UPDATE usairlineflights2.flights SET ActualElapsedTime = NULL WHERE ActualElapsedTime = '-32768';
UPDATE usairlineflights2.flights SET ArrTime = NULL WHERE ArrTime = '-32768';

/*Ejercicio 1*/
SELECT count(flightID) AS Quantitat FROM USAirlineFlights2.Flights;

/*Ejercicio 2*/
SELECT Origin, AVG(ArrDelay) AS AverageArrivalDelay, AVG(DepDelay) AS AverageDepartureDelay   FROM USAirlineFlights2.Flights GROUP BY Origin;

/*Ejercicio 3*/
SELECT Origin, colYear, colMonth, ArrDelay  FROM USAirlineFlights2.Flights ORDER BY Origin, colYear, colMonth;

/*Ejercicio 4*/
SELECT City, colYear, colMonth, ArrDelay  FROM USAirlineFlights2.Flights, USAirlineFlights2.USAirports WHERE Origin =  IATA ORDER BY City, colYear, colMonth;

/*Ejercicio 5 -----------------------------esta mal datos?*/
SELECT UniqueCarrier, colYear, colMonth, Sum(Cancelled) FROM USAirlineFlights2.Flights GROUP BY UniqueCarrier, colYear, colMonth ORDER BY Sum(Cancelled) DESC;

/*Ejercicio 6*/
SELECT TailNum, Sum(Distance) FROM USAirlineFlights2.Flights WHERE TailNum != 'NA' GROUP BY TailNum ORDER BY Sum(Distance) DESC limit 10;

/*Ejercicio 7*/
SELECT UniqueCarrier, AVG(ArrDelay) FROM USAirlineFlights2.Flights  GROUP BY UniqueCarrier HAVING AVG(ArrDelay) > 10 ORDER BY AVG(ArrDelay) DESC ;