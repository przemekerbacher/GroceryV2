using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Grocery.Models
{
    public class PaginationParameters
    {
		public int MaxPageSize { get; set; } = 30;
		public int PageNumber { get; set; } = 1;

		private int _pageSize = 10;
		public int PageSize
		{
			get
			{
				return _pageSize;
			}
			set
			{
				_pageSize = (value > MaxPageSize) ? MaxPageSize : value;
			}
		}
	}
}
