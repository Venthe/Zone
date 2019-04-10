using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.SPECIAL
{
    public class BaseTranslation : AbstractEntity<string>, IBaseTranslation
    {
        public string Description { get; set; }
        public string Name { get; set; }

        public BaseTranslation(string id, string name, string description)
        {
            Name = name;
            Description = description;
            Id = id;
        }

        public static BaseTranslation Empty = new BaseTranslation("", "", "");
    }
}
