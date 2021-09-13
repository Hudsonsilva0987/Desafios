import java.util.Locale;
public class Program {

    Locale l = new Locale("en", "us");
    public static void main(String[] args) {
        float n = 105.50f;
        float rest;

        rest = (n%100);
        n -= rest;
        n/=100;
        System.out.println(n);

    }
}
