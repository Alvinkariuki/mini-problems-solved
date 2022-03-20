static void SumofMultiples(int num)
{
	int sum = 0;
	for (int i = num-1; i > 2; i--)
	{
		if(i % 5 == 0 || i % 3 == 0)
		{
			sum += i;
		}
	}

	Console.WriteLine(sum);
}